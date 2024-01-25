using System.Text.Json.Serialization;

namespace Examen.Entities
{
    public class Comanda
    {
        public int Id { get; set; }
        public int UtilizatorId { get; set; }

        [JsonIgnore]
        public Utilizator? Utilizator { get; set; }

        [JsonIgnore]
        public ICollection<Produs> Produs { get; set; } = new List<Produs>();
        public Comanda() { }
        public Comanda(int id, int utilizatorId)
        {
            Id = id;
            UtilizatorId = utilizatorId;
        }
    }
}
