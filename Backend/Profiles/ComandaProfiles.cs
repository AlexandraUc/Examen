using AutoMapper;
using Examen.Entities;
using Examen.Models;

namespace Examen.Profiles
{
    public class ComandaProfiles: Profile
    {
        public ComandaProfiles() {
            CreateMap<PostComandaDto, Comanda>();
            CreateMap<Comanda, GetComandaDto>();    
        }
    }
}
