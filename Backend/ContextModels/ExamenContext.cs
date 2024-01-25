using Examen.Entities;
using Microsoft.EntityFrameworkCore;

namespace Examen.ContextModels
{
    public class ExamenContext : DbContext
    {
        public ExamenContext(DbContextOptions<ExamenContext> options) : base(options) { }

        public DbSet<Utilizator> Utilizator { get; set; }
        public DbSet<Comanda> Comanda { get; set; }
        public DbSet<Produs> Produs { get; set; }

    }
}
