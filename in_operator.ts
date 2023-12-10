interface user{
    name: string,
    email: string
}
interface admin{
    name: string,
    email:string,
    isAdmin: boolean
}

function isAdminAccount(account:user | admin) 
{
       if ("isAdmin" in account) {
            return account.isAdmin
       }
}