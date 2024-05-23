using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using x10.Authorization;

namespace x10
{
    [DependsOn(
        typeof(x10CoreModule), 
        typeof(AbpAutoMapperModule))]
    public class x10ApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<x10AuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(x10ApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
