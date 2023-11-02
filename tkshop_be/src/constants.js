export const USER = {
    ROLE: {
        ADMIN: 'admin',
        STAFF: 'staff',
        CUSTOMER: 'customer'
      },
      STATUS: {
        ACTIVE: 'active',
        INACTIVE: 'inactive',
        LOCKED: 'locked'
      }
};

export const ORDER = {
  STATUS: {
    PENDING: 'pending',       // order created, waiting for confirm by admin or staff
    CONFIRMED: 'confirmed',   // order confirmed by admin or staff
    SHIPPING: 'shipping',     // order has been picked up by staff and is being shipped
    COMPLETED: 'completed',   // order has been delivered
    CANCELLED: 'cancelled'    // order has been cancelled
  },
};

export const DISCOUNT_CONS = {
  TYPE: {
    PERCENT: 'percent',
    PRICE: 'price'
  }
};

export const REGEX = {
    UUID: /^[0-9a-fA-F]{24}$/,
    PHONE: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    EMAIL: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
};

export const allowImageMineTypes = [
  'image/bmp',                // .bmp       - Windows OS/2 Bitmap Graphics
  'image/jpeg',               // .jpeg .jpg - JPEG images
  'image/png',                // ..png      - Portable Network Graphics
  'image/gif',                // .gif       - Graphics Interchange Format (GIF)
  'image/tiff',               // .tif .tiff - Tagged Image File Format (TIFF)
  'image/svg+xml',            // .svg       - Scalable Vector Graphics (SVG)
  'image/vnd.microsoft.icon', // .ico       - Icon format
  'image/x-icon'              // same above
];

export default {
  USER,
  ORDER,
  REGEX
}