namespace Examen.Models
{
    public class GetComandaDto
    {
        public int Id { get; set; }
        public int UtilizatorId { get; set; }
        public ICollection<GetProdusDto> Produs { get; set; }

    }
}
