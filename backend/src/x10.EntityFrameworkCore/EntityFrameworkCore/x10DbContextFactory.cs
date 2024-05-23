using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using x10.Configuration;
using x10.Web;

namespace x10.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class x10DbContextFactory : IDesignTimeDbContextFactory<x10DbContext>
    {
        public x10DbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<x10DbContext>();
            
            /*
             You can provide an environmentName parameter to the AppConfigurations.Get method. 
             In this case, AppConfigurations will try to read appsettings.{environmentName}.json.
             Use Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") method or from string[] args to get environment if necessary.
             https://docs.microsoft.com/en-us/ef/core/cli/dbcontext-creation?tabs=dotnet-core-cli#args
             */
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            x10DbContextConfigurer.Configure(builder, configuration.GetConnectionString(x10Consts.ConnectionStringName));

            return new x10DbContext(builder.Options);
        }
    }
}
