using Claim.Data.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace Claim.Data
{
    public class AppDBContext:IdentityDbContext<AppUser,IdentityRole,string>
    {
        public AppDBContext(DbContextOptions options) : base(options)
        {
            
        }

    }
}