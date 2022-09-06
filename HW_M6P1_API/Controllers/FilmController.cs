using Microsoft.AspNetCore.Mvc;
namespace HW_M6P1
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmController:ControllerBase
    {
        private readonly IService _service;
        public FilmController(IService service)
        {
            _service = service;
        }

        [HttpGet]
        public IEnumerable<Film> Get()
        {
            return _service.All();
        }

        [HttpGet("{id}")]
        public Film Get(int id)
        {
            var result = _service.Id(id);
            if (result != null)
            {
                return result;
            }
            else
            {
                return new Film();
            }
        }

        [HttpPost]
        public bool Post([FromBody] Film film)
        {
            return _service.Insert(film);
        }

        [HttpPut("{id}")]
        public int Put(int id, [FromBody] Film film)
        {
            film.FilmId = id;
            return _service.Update(film);
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            return _service.Delete(id);
        }
    }
}
