export const getUsers = (role) => async (req, res, next) => {
    let users = await userService.getListByRole(role);
    res.send(users);
}
