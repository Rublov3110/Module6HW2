namespace HW_M6P1
{
    public interface IService
    {
        public List<Film> All();

        public Film Id(int id);

        public bool Insert(Film film);

        public int Update(Film film);

        public bool Delete(int id);

    }
}
