import mongoose from "mongoose";
import productModel from "../entities/product.entity.js";
import categoryService from "./category.service.js";
import brandService from "./brand.service.js";
import StringUtils from "../utils/StringUtils.js";
import ApiErrorUtils from "../utils/ApiErrorUtils.js";
import stringformatUtils from "../utils/stringformat.utils.js";
import categoryModel from "../entities/category.entity.js";
import brandModel from "../entities/brand.entity.js";

const SELECT_FIELD = '_id name slug desc video overSpecs origin category brand tags views rate variants quantity warrantyPeriod isHide createdAt updatedAt';

const initialProductVariant = async (data) => {
    let variant = {};
    if (data.sku) {
        variant.sku = data.sku;
    }
    if (data.variantName) {
        variant.variantName = data.variantName;
    }
    if (data.price) {
        variant.price = Number.parseInt(data.price);
    }
    if (data.marketPrice) {
        variant.marketPrice = Number.parseInt(data.marketPrice);
    }
    if (data.quantity) {
        variant.quantity = Number.parseInt(data.quantity);
    }
    if (data.addOverSpecs) {
        if (typeof data.addOverSpecs === 'string') {
            variant.addOverSpecs = JSON.parse(data.addOverSpecs);
        }
        else if (data.addOverSpecs) {
            variant.addOverSpecs = data.addOverSpecs;
        }
    }
    if (data.addDetailSpecs) {
        if (typeof data.addDetailSpecs === 'string') {
            variant.addDetailSpecs = JSON.parse(data.addDetailSpecs)
        } else if (data.addDetailSpecs) {
            variant.addDetailSpecs = data.addDetailSpecs;
        }
    }
    if (data.thumbnail && data.thumbnail.length > 0) {
        if (typeof data.thumbnail === 'string') {
            variant.thumbnail = data.thumbnail
        }
        else if (Array.isArray(data.thumbnail)) {
            variant.thumbnail = data.thumbnail[0];
        }
    }
    if (data.pictures) {
        if (typeof data.pictures === 'string') {
            variant.pictures = StringUtils.splitsAndTrim(data.pictures, ',');
        } else if (Array.isArray(data.pictures)) {
            variant.pictures = data.pictures;
        }
    }
    return variant;
}

const initialProduct = async (data, isAddNew = false) => {
    let product = {};

    const categoryId = await categoryService.getId(data.categoryId);
    if (!categoryId && isAddNew) {
        throw new ApiErrorUtils({
            message: `Category '${data.categoryId}' not found!`,
            status: 404
        });
    } else if (categoryId) {
        product.categoryId = categoryId;
    } else { }

    const brandId = await brandService.getId(data.brandId);
    if (!brandId && isAddNew) {
        throw new ApiErrorUtils({
            message: `Brand '${data.brandId}' not found!`,
            status: 404
        });
    } else if (brandId) {
        product.brandId = brandId;
    } else { }

    if (data.name) {
        product.name = data.name;
    }
    if (data.desc) {
        product.desc = data.desc;
    }
    if (data.video) {
        product.video = data.video;
    }
    if (data.overSpecs) {
        if (typeof data.overSpecs === 'string') {
            product.overSpecs = JSON.parse(data.overSpecs);
        }
        else if (data.overSpecs) {
            product.overSpecs = data.overSpecs;
        }
    }
    if (data.warrantyPeriod) {
        product.warrantyPeriod = Number.parseInt(data.warrantyPeriod);
    }

    if (isAddNew) {
        let firstVariant = initialProductVariant(data);
        product.variants = [firstVariant];
        product.defaultVariant = (await firstVariant).sku;
    } else if (data.defaultVariant) {
        product.defaultVariant = data.defaultVariant;
    }
    return product;
}

const getFullAll = async () => {
    return productModel.find()
        .populate('brandId categoryId')
        .sort({ createdAt: -1 })
        .lean()
        .exec();
}

const getNewestProduct = async () => {
    return productModel.find({ 'variants.quantity': { $gt: 0 } })
        .populate('brandId categoryId')
        .sort({ 'variants.createTime': -1 })
        .limit(12)
        .lean()
        .exec();
}


const getMostViewProduct = async () => {
    return productModel.find({ 'variants.quantity': { $gt: 0 } })
        .populate('brandId categoryId')
        .sort({ views: -1 })
        .limit(12)
        .lean()
        .exec();
}

const searchWithFilter = async (query) => {
    try {
        const searchOptions = {
            'variants.price': { $gte: query.minPrice, $lte: query.maxPrice },
        };

        if (query.category) {
            const category = await categoryModel.find({ slug: query.category }).select('_id').exec();
            if (category)
                searchOptions.categoryId = category;
        }

        if (query.brand) {
            const brandList = await brandModel.find({ slug: query.brand.split(',') }).select('_id').exec();
            if (brandList)
                searchOptions.brandId = { $in: brandList };
        }

        const checkKeyword = (query.keyword && query.keyword !== '' && query.keyword !== 'undefined');
        const textSearch = checkKeyword ? {$text: { $search: query.keyword } } : {};

        const total = await productModel.count({
            $and: [searchOptions, textSearch]
        })

        const list = await productModel.find({
            $and: [searchOptions, textSearch]
        })
            .populate('brandId categoryId')
            .sort(checkKeyword ? { score: { $meta: 'textScore' } } : { createdAt: -1 })
            .skip((query.page - 1)*10)
            .limit(9)
            .lean()
            .exec();

        return {total, list}
    } catch (error) {
        console.log(error)
    }
}

const searchFull= async (query) => {
    try {
        const searchOptions = {
            'variants.price': { $gte: query.minPrice, $lte: query.maxPrice },
        };

        if (query.category) {
            const category = await categoryModel.find({ slug: query.category }).select('_id').exec();
            if (category)
                searchOptions.categoryId = category;
        }

        if (query.brand) {
            const brandList = await brandModel.find({ slug: query.brand.split(',') }).select('_id').exec();
            if (brandList)
                searchOptions.brandId = { $in: brandList };
        }

        const checkKeyword = (query.keyword && query.keyword !== '' && query.keyword !== 'undefined');
        const textSearch = checkKeyword ? {$text: { $search: query.keyword } } : {};

        return await productModel.find({
            $and: [searchOptions, textSearch]
        })
            .populate('brandId categoryId')
            .sort(checkKeyword ? { score: { $meta: 'textScore' } } : { createdAt: -1 })
            .lean()
            .exec();
    } catch (error) {
        console.log(error)
    }

}

async function getAll(options = {}) {
    let {
        fields,
        filters = {},
    } = options;

    if (fields.indexOf(',') > -1) {
        fields = fields.split(',').join(' ');
    }

    const productIds = filters._id && filters._id.$in ? filters._id.$in : [];
    const total = await productModel.count(filters, null);
    const products = await productModel.find({ _id: { $in: productIds } }, null, null, null)
        .select(fields)
        .sort({ createdAt: -1 })
        .lean()
        .exec();

    return products
}

async function getOneProduct(identity) {
    let str;
    if (stringformatUtils.isUUID(identity))
        str = { _id: identity };
    else
        str = { slug: identity };
    return await productModel.findOne(str);
}

async function add(data) {
    const product = new productModel({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });
    return product.save();
}

const updateProductVariant = async (productId, sku, variantData) => {
    const product = await getOneProduct(productId);
    if (!product) {
        throw ApiErrorUtils.simple(`Product ${productId} not found`, 404);
    }

    let variantUpdate = await initialProductVariant(variantData);
    let index = product.variants.findIndex(x => x.sku === sku);
    for (const property in variantUpdate) {
        product.variants[index][property] = variantUpdate[property];
    }
    return product.save();
}

async function update(id, data) {
    return productModel.findByIdAndUpdate(id, data, { new: true });
}

async function visitProduct(id) {
    return productModel.findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true });
}

async function remove(id) {
    return !!(await productModel.findByIdAndRemove(id));
}
// async function getByName(name){
//     return productModel.fin
// }
export default { getNewestProduct, getAll, getFullAll, updateProductVariant, getOneProduct, add, update, remove, searchWithFilter, getMostViewProduct, visitProduct };
