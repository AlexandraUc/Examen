﻿using Examen.Entities;
using Microsoft.EntityFrameworkCore;

namespace Examen.ContextModels
{
    public class ExamenContext : DbContext
    {
        public ExamenContext(DbContextOptions<ExamenContext> options) : base(options) { }
        public DbSet<Test> Tests { get; set; }
    }
}