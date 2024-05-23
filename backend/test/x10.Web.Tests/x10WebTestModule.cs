using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using x10.EntityFrameworkCore;
using x10.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace x10.Web.Tests
{
    [DependsOn(
        typeof(x10WebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class x10WebTestModule : AbpModule
    {
        public x10WebTestModule(x10EntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(x10WebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(x10WebMvcModule).Assembly);
        }
    }
}