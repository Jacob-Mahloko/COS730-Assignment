using System.Threading.Tasks;
using Abp.Application.Services;
using x10.Authorization.Accounts.Dto;

namespace x10.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
