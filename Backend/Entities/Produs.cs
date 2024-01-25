namespace Examen.Entities
{
    public class Produs
    {
        public int Id { get; set; }
        public string Nume { get; set; }
        public int Pret {  get; set; }
        public ICollection<Comanda> Comanda { get; set; } = new List<Comanda>();
        public Produs() { }
        public Produs(int id, string nume, int pret)
        {
            Id = id;
            Nume = nume;
            Pret = pret;
        }
    }
}
