using Microsoft.AspNetCore.Mvc;
using Examen.ContextModels;
using Examen.Entities;
using Examen.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace Examen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UtilizatorController : ControllerBase
    {
        private readonly ExamenContext _context;

        private readonly IMapper _mapper;
        public UtilizatorController(ExamenContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetUtilizatori() {
            var utilizatori = await  _context.Utilizator.ToListAsync();
            var ut = new List<GetUtilizatorDto>();

            for (int i = 0; i < utilizatori.Count; i++)
                ut.Add(_mapper.Map<GetUtilizatorDto>(utilizatori[i]));

            return Ok(ut);
        }

        [HttpPost]
        public async Task<IActionResult> PostUtilizator(PostUtilizatorDto utilizator)
        {
            _context.Utilizator.Add(_mapper.Map<Utilizator>(utilizator));
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
