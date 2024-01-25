using Microsoft.AspNetCore.Mvc;
using Examen.Entities;
using Examen.Models;
using Examen.ContextModels;

namespace Examen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComandaProdusController : ControllerBase
    {
        private readonly ExamenContext _context;
        public ComandaProdusController(ExamenContext context)
        {
            _context = context;
        }

        [HttpPut]
        public async Task<IActionResult> PutComandaProdus(PutComandaProdusDto copr)
        {
            var produs = await _context.Produs.FindAsync(copr.ProdusId);
            var comanda = await _context.Comanda.FindAsync(copr.ComandaId);

            if(produs != null && comanda != null)
            {
                produs.Comanda.Add(comanda);
                comanda.Produs.Add(produs);

                await _context.SaveChangesAsync();
                return Ok();
            }

            return NotFound();
        }

    }
}
