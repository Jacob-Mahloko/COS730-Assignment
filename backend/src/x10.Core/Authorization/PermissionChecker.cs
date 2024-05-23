using Abp.Authorization;
using x10.Authorization.Roles;
using x10.Authorization.Users;

namespace x10.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
