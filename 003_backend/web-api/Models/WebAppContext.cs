using Microsoft.EntityFrameworkCore;

namespace web_api.Models
{
    public class WebAppContext : DbContext
    {
        public WebAppContext(DbContextOptions options) : base(options) { }

        public DbSet<SchoolYear>? SchoolYears { get; set; }
        public DbSet<School>? Schools { get; set; }
        public DbSet<Holiday>? Holidays { get; set; }
        public DbSet<Subject>? Subjects { get; set; }
        public DbSet<Grad>? Grads { get; set; }
    }
}
