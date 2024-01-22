namespace Examen.Entities
{
    public class Test
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Test(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
