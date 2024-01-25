using Microsoft.AspNetCore.Mvc;
using Examen.ContextModels;
using Examen.Entities;
using Microsoft.EntityFrameworkCore;
using Examen.Models;
using AutoMapper;

namespace Examen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComandaController : ControllerBase
    {
        private readonly ExamenContext _context;

        private readonly IMapper _mapper;
        public ComandaController(ExamenContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetComenzi()
        {
            var comenzi = await _context.Comanda.Include(c => c.Produs).ToListAsync();
            var co = new List<GetComandaDto>();

            for (int i = 0; i < comenzi.Count; i++)
                co.Add(_mapper.Map<GetComandaDto>(comenzi[i]));

            return Ok(co);
        }

        [HttpPost]
        public async Task<IActionResult> PostComanda(PostComandaDto comanda)
        {
            _context.Add(_mapper.Map<Comanda>(comanda));
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
