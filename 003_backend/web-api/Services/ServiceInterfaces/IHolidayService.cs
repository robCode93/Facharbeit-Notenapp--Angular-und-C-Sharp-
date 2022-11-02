using web_api.Models;
using web_api.Models.DetailModels;

namespace web_api.Services.ServiceInterfaces
{
    public interface IHolidayService
    {
        List<HolidayDetails> GetAllHolidays();
        HolidayDetails GetHolidayById(Guid holidayId);
        List<HolidayDetails> GetHolidaysByFedState(string fedstate);
    }
}
