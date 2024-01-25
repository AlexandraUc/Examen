using AutoMapper;
using Examen.Entities;
using Examen.Models;

namespace Examen.Profiles
{
    public class ProdusProfiles: Profile
    {
        public ProdusProfiles() { 
            CreateMap<PostProdusDto, Produs>();
            CreateMap<Produs, GetProdusDto>();  
        }
    }
}
