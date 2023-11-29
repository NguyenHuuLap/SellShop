import { Grid, Typography, Divider, Rating, Box, Link, Card } from "@mui/material";
import * as React from "react";
import ImageCarosel from "../components/ImageCarosel";
import VariantList from "../components/VariantList";
import Discount from "../components/Discount";
import BuyButton from "../components/BuyButton";
import OverSpec from "../components/OverSpec";
import DetailSpec from "../components/DetailSpec";
import DescriptionAndRating from "../components/DescriptionAndRating";
import MainProduct from "../../../../components/common/components/MainProduct";
import { useParams } from "react-router-dom";
import { NumericFormat } from 'react-number-format';
import axios from 'axios';
import NumberFormat from "../../../../utils/NumberFormat";

const ProductDetail = () => {
    const { productSlug, variantSku } = useParams();
    const [product, setProduct] = React.useState();
    const [variant, setVariant] = React.useState();
<<<<<<< HEAD
=======
    const [comments, setComment] = React.useState([]);
    const [rating, setRating] = React.useState(0);
    const [imageList, setImageList] = React.useState();
>>>>>>> dev-khang

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(`http://localhost:3030/product/${productSlug}`)
                    .then(value => {
                        setProduct(value.data);
                        for (const v of value.data.variants) {
                            if (v.sku === variantSku) {
                                // console.log(v.sku)
                                setVariant(v);
                                break;
                            }
                        }

                    });
                setComment([]);
                await axios.get(`http://localhost:3030/comment/product/${productSlug}`)
                    .then(value => {
                        let sum = 0;
                        let count = 0;
                        value.data.data.forEach(item => {
                            setComment(comments => [item, ...comments]);
                            sum += parseInt(item.star);
                            count++;

                        })
                        if (count === 0)
                            setRating(-1);
                        else
                            setRating(sum / count);
                    })

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        console.log(!rating)
    }, [variantSku]);
    const [open, setOpen] = React.useState(false);
<<<<<<< HEAD
    // console.log(product)
=======
>>>>>>> dev-khang


    return !product || !variant || !comments || !rating ? (<>Loading</>) : (
        <>
            <Grid container spacing={3}
                sx={{
                    maxWidth: "1200px",
                    display: "flex",
                    margin: "auto",
                }}
            >
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="h6" component="h2" fontWeight={650} sx={{ textTransform: "uppercase" }}>
                                {product.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}>
                                <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
                                <Link href="#">{comments.length} danh gia</Link>
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={7}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <ImageCarosel data={product.hightLightPics} />
                        </Grid>
                        <Grid item xs={12}>
                            <OverSpec setOpen={setOpen} overSpecs={product.overSpecs} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Card sx={{ p: 2 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Typography variant="h5" fontWeight={700} sx={{ color: '#E8171F' }}>
                                    <NumberFormat number={variant.price} />₫
                                </Typography>
                                <Typography variant="body1" fontWeight={600} sx={{ textDecoration: "line-through", marginLeft: 1 }}>
                                    <NumberFormat number={variant.marketPrice} />₫
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <VariantList data={product.variants} variant={variant} slug={product.slug} />
                            </Grid>
                            <Grid item>

                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Discount />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <BuyButton productId={product._id} sku={variant.sku} />
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <DescriptionAndRating desc={product.desc} rating={rating} comments={comments} productSlug={productSlug} />
                </Grid>
                <Grid item xs={12}>
                    {/* <MainProduct title="SẢN PHẨM LIÊN QUAN" gridRows={1}/> */}
                </Grid>

            </Grid>
            <DetailSpec open={open} setOpen={setOpen} detailSpecs={product.detailSpecs} />
        </>
    );
}

export default ProductDetail;