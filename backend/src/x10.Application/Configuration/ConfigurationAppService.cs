using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using x10.Configuration.Dto;

namespace x10.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : x10AppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
