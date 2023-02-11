
export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    secret: process.env.JWT_SECRET,
    saltOrRounds: parseInt(process.env.HASH_SALT_ROUNDS),
    jwt_expires_in: process.env.JWT_EXPIRES_IN
});