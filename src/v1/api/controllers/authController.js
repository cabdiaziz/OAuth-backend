const login = (req, res) => {
    res.json({ msg: 'login user' });
};
const register = (req, res) => {
    res.json({ msg: 'register user' });
};
const updateUser = (req, res) => {
    res.json({ msg: 'update user' });
};

export { login, register, updateUser };