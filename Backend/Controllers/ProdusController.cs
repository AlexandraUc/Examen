using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Examen.ContextModels;
using Examen.Entities;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using Examen.Models;

namespace Examen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdusController : ControllerBase
    {
        private readonly ExamenContext _context;

        private readonly IMapper _mapper;
        public ProdusController(ExamenContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetProduse()
        {
            var produse = await _context.Produs.ToListAsync();
            var pr = new List<GetProdusDto>();

            for (int i = 0; i < produse.Count; i++)
                pr.Add(_mapper.Map<GetProdusDto>(produse[i]));

            return Ok(pr);
        }

        [HttpPost]
        public async Task<IActionResult> PostProdus(PostProdusDto produs)
        {
            _context.Produs.Add(_mapper.Map<Produs>(produs));
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
