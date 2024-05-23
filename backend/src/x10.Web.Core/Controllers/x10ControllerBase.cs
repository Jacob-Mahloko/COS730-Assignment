using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace x10.Controllers
{
    public abstract class x10ControllerBase: AbpController
    {
        protected x10ControllerBase()
        {
            LocalizationSourceName = x10Consts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
