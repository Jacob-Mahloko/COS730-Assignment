using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using x10.MultiTenancy;

namespace x10.Sessions.Dto
{
    [AutoMapFrom(typeof(Tenant))]
    public class TenantLoginInfoDto : EntityDto
    {
        public string TenancyName { get; set; }

        public string Name { get; set; }
    }
}
