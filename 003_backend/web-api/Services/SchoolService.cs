using web_api.Models;
using web_api.Models.DetailModels;
using web_api.Services.ServiceInterfaces;

namespace web_api.Services
{
    public class SchoolService : ISchoolService
    {

        WebAppContext _context;

        public SchoolService(WebAppContext context)
        {
            _context = context;
        }

        public ResponseModel DeleteSchool(Guid schoolId)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var school = _context.Schools.FirstOrDefault(s => s.Id == schoolId);

                if(school != null)
                {
                    _context.Schools.Remove(school);
                    model.IsSuccess = true;
                    model.Message = "School removed successfully";
                }
                else
                {
                    model.IsSuccess = false;
                    model.Message = "School not found";
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

        public List<School>? GetAllSchools()
        {
            return _context.Schools.ToList();
        }

        public School? GetSchoolById(Guid schoolId)
        {
            return _context.Schools.FirstOrDefault(s => s.Id == schoolId);
        }

        public ResponseModel SaveSchool(School schoolModel)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var school = _context.Schools.FirstOrDefault(s => s.Id == schoolModel.Id);

                if(school != null)
                {
                    school.FedState = schoolModel.FedState;
                    school.Name = schoolModel.Name; 
                    school.Holidays = schoolModel.Holidays;
                    
                    _context.Update(school);
                    model.IsSuccess = true;
                    model.Message = "School updated successfully";
                }
                else
                {
                    _context.Schools.Add(schoolModel);
                    model.IsSuccess = true;
                    model.Message = "School added successfully";
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

        public List<HolidayDetails> GetHolidaysOfSchool(Guid schoolId)
        {
            List<HolidayDetails> detailList;

            try
            {
                detailList = new List<HolidayDetails>();
                var school = _context.Schools.FirstOrDefault(s => s.Id == schoolId);

                if( school != null)
                {
                    if(school.Holidays != null)
                    {
                        foreach(Holiday holiday in school.Holidays)
                        {
                            HolidayDetails details = new HolidayDetails();
                            details.Id = holiday.Id;
                            details.Name = holiday.Name;
                            details.StartDate = holiday.StartDate;
                            details.EndDate = holiday.EndDate;

                            detailList.Add(details);
                        }
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }

            return detailList;
        }
    }
}
