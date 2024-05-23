using System.Threading.Tasks;
using Abp.Application.Services;
using x10.Sessions.Dto;

namespace x10.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
