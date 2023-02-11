
export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    secret: process.env.JWT_SECRET || 'dsflkjdsfklj',
    saltOrRounds: parseInt(process.env.HASH_SALT_ROUNDS) || 10,
    jwt_expires_in: process.env.JWT_EXPIRES_IN || '20s'
});