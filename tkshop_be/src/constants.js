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

export const REGEX = {
    USERNAME: /^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    PHONE: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    EMAIL: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
};
