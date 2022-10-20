using Microsoft.EntityFrameworkCore;

namespace web_api.Models
{
    public class WebAppContext : DbContext
    {
        public WebAppContext(DbContextOptions options) : base(options) { }

        DbSet<SchoolYear>? SchoolYears { get; set; }
        DbSet<School>? Schools { get; set; }
        DbSet<Holiday>? Holidays { get; set; }
        DbSet<Subject>? Subjects { get; set; }
        DbSet<Grad>? Grads { get; set; }
    }
}
