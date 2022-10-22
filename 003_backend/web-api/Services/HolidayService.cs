using web_api.Models;
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

        public ResponseModel DeleteHoliday(Guid holidayId)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var holiday = _context.Holidays.SingleOrDefault(h => h.Id == holidayId);

                if(holiday != null)
                {
                    _context.Holidays.Remove(holiday);
                    model.IsSuccess = true;
                    model.Message = "Holidays removed successfully";
                }
                else
                {
                    model.IsSuccess = false;
                    model.Message = "Holidays not found";
                }
            }
            catch(Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            _context.SaveChanges();
            return model;
        }

        public List<Holiday>? GetAllHolidays()
        {
            return _context.Holidays.ToList();
        }

        public Holiday? GetHolidayById(Guid holidayId)
        {
            return _context.Holidays.FirstOrDefault(h => h.Id == holidayId);
        }

        public ResponseModel SaveHoliday(Holiday holidayModel)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var holiday = _context.Holidays.FirstOrDefault(h => h.Id != holidayModel.Id);

                if(holiday != null)
                {
                    holiday.Name = holidayModel.Name;
                    holiday.StartDate = holidayModel.StartDate;
                    holiday.EndDate = holidayModel.EndDate;
                    
                    _context.Update(holiday);
                    model.IsSuccess = true;
                    model.Message = "Holidays updated successfully";
                }
                else
                {
                    _context.Holidays.Add(holidayModel);
                    model.IsSuccess = true;
                    model.Message = "Holidays added successfully";
                }
            }
            catch (Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            _context.SaveChanges();
            return model;
        }
    }
}
