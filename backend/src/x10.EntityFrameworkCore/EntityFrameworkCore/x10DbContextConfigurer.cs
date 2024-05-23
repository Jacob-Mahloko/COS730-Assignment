using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace x10.EntityFrameworkCore
{
    public static class x10DbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<x10DbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<x10DbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
