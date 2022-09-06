using Microsoft.Extensions.Options;
using Newtonsoft.Json;
namespace HW_M6P1
{
    public class Service:IService
    {
        public List<Film> _film;

        public Service(IOptions<Configuration> productsConfiguration)
        {
            _film = Deserialize<Film>(productsConfiguration.Value.Config);
        }

        public bool Delete(int id)
        {
            var product = Id(id);
            if (product != null)
            {
                _film.Remove(product);
                return true;
            }
            else
            {
                return false;
            }
        }

        public List<Film> All()
        {
            return _film;
        }

        public Film Id(int id)
        {
            return _film.SingleOrDefault(p => p.FilmId == id);
        }

        public bool Insert(Film film)
        {
            if (_film.SingleOrDefault(p => p.FilmId == film.FilmId) == null)
            {
                _film.Add(film);
                return true;
            }
            else
            {
                return false;
            }
        }

        public int Update(Film film)
        {
            var index = _film.IndexOf(Id(film.FilmId));
            if (index == -1)
            {
                _film.Add(film);
            }
            else
            {
                _film[index] = film;
            }

            return index;
        }
        private List<TModel> Deserialize<TModel>(in string path)
        {
            var configFile = File.ReadAllText(path);
            if (string.IsNullOrEmpty(configFile))
            {
                throw new DirectoryNotFoundException();
            }

            return JsonConvert.DeserializeObject<List<TModel>>(configFile);
        }
    }
}
