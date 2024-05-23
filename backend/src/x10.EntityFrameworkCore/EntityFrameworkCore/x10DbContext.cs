using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using x10.Authorization.Roles;
using x10.Authorization.Users;
using x10.MultiTenancy;

namespace x10.EntityFrameworkCore
{
    public class x10DbContext : AbpZeroDbContext<Tenant, Role, User, x10DbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public x10DbContext(DbContextOptions<x10DbContext> options)
            : base(options)
        {
        }
    }
}
