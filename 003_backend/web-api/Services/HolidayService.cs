using Microsoft.EntityFrameworkCore;
using web_api.Models;
using web_api.Models.DetailModels;
using web_api.Services.ServiceInterfaces;

namespace web_api.Services
{
    public class HolidayService : IHolidayService
    {

        WebAppContext _context;

        public HolidayService(WebAppContext context)
        {
            _context = context;
        }

        public List<HolidayDetails> GetAllHolidays()
        {
            List<HolidayDetails> detailList = new List<HolidayDetails>();

            var allHolidays = _context.Holidays.ToList();

            foreach(Holiday holiday in allHolidays)
            {
                HolidayDetails details = new HolidayDetails();
                details.Id = holiday.Id;
                details.Name = holiday.Name;
                details.StartDate = holiday.StartDate;
                details.EndDate = holiday.EndDate;

                detailList.Add(details);
            }

            return detailList;
        }

        public HolidayDetails? GetHolidayById(Guid holidayId)
        {
            HolidayDetails details = new HolidayDetails();

            var holidays = _context.Holidays.FirstOrDefault(h => h.Id == holidayId);

            if(holidays == null)
            {
                return null;
            }


            details.Id = holidays.Id;
            details.Name = holidays.Name;
            details.StartDate = holidays.StartDate;
            details.EndDate = holidays.EndDate;

            return details;

        }

        public List<HolidayDetails> GetHolidaysByFedState(string fedstate)
        {
            List<HolidayDetails> detailsList = new List<HolidayDetails>();

            var allHolidays = _context.Holidays.ToList();

            if(allHolidays != null)
            {
                foreach(Holiday holiday in allHolidays)
                {
                    if(holiday.FederalState == fedstate)
                    {
                        HolidayDetails details = new HolidayDetails();
                        details.Name = holiday.Name;
                        details.Id = holiday.Id;
                        details.StartDate = holiday.StartDate;
                        details.EndDate = holiday.EndDate;

                        detailsList.Add(details);
                    }
                }
            }

            return detailsList;


        }
    }
}
