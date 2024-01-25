using AutoMapper;
using Examen.Entities;
using Examen.Models;

namespace Examen.Profiles
{
    public class UtilizatorProfiles: Profile
    {
        public UtilizatorProfiles() {
            CreateMap<Utilizator, GetUtilizatorDto>();
            CreateMap<PostUtilizatorDto, Utilizator>();
        } 
    }
}
