namespace Examen.Entities
{
    public class Utilizator
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public ICollection<Comanda> Comenzi { get; set; } = new List<Comanda>();
        public Utilizator() { }
        public Utilizator(int id, string username, string password)
        {
            Id = id;
            Username = username;
            Password = password;
        }
    }
}
