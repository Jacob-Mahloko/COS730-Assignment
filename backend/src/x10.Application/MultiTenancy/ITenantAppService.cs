using Abp.Application.Services;
using x10.MultiTenancy.Dto;

namespace x10.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

