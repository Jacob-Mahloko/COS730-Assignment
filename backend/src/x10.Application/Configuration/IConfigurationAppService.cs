using System.Threading.Tasks;
using x10.Configuration.Dto;

namespace x10.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
