using Microsoft.EntityFrameworkCore;
using web_api.Models;
using web_api.Models.DetailModels;
using web_api.Services.ServiceInterfaces;
using web_api.CRUDModels;

namespace web_api.Services
{
    public class SchoolService : ISchoolService
    {

        WebAppContext _context;

        public SchoolService(WebAppContext context)
        {
            _context = context;
        }

        public List<SchoolDetails> GetAllSchools()
        {
            List<SchoolDetails> detailList = new List<SchoolDetails>();

            var schools = _context.Schools.Include(s => s.Holidays).ToList();

            foreach(School school in schools)
            {
                SchoolDetails details = new SchoolDetails();
                details.Id = school.Id;
                details.Name = school.Name;
                details.FedState = school.FedState;

                foreach(Holiday holiday in school.Holidays)
                {
                    HolidayDetails holidayDetails = new HolidayDetails();
                    holidayDetails.Id = holiday.Id;
                    holidayDetails.Name = holiday.Name;
                    holidayDetails.StartDate = holiday.StartDate;
                    holidayDetails.EndDate = holiday.EndDate;

                    details.Holidays.Add(holidayDetails);
                }

                

                detailList.Add(details);

            }

            return detailList;


        }

        public SchoolDetails? GetSchoolById(Guid schoolId)
        {
            var school = _context.Schools.Include(s => s.Holidays).FirstOrDefault(s => s.Id == schoolId);

            if(school == null)
            {
                return null;
            }

            SchoolDetails details = new SchoolDetails();
            details.Id = school.Id;
            details.Name = school.Name;
            details.FedState = school.FedState;

            foreach (Holiday holiday in school.Holidays)
            {
                HolidayDetails holidayDetails = new HolidayDetails();
                holidayDetails.Id = holiday.Id;
                holidayDetails.Name = holiday.Name;
                holidayDetails.StartDate = holiday.StartDate;
                holidayDetails.EndDate = holiday.EndDate;

                details.Holidays.Add(holidayDetails);
            }

            return details;

        }

        public List<HolidayDetails> GetHolidaysOfSchool(Guid schoolId)
        {
            List<HolidayDetails> detailList;

            try
            {
                detailList = new List<HolidayDetails>();
                var school = _context.Schools.Include(s => s.Holidays).FirstOrDefault(s => s.Id == schoolId);

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

        public ResponseModel DeleteSchool(Guid schoolId)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var school = _context.Schools.FirstOrDefault(s => s.Id == schoolId);

                if (school != null)
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

        public ResponseModel CreateSchool(CreateSchoolModel createModel)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                School school = new School();

                school.Name = createModel.Name;
                school.FedState = createModel.FedState;

                foreach(Guid id in createModel.Holidays)
                {
                    school.Holidays.Add(_context.Holidays.FirstOrDefault(h => h.Id == id));
                }

                _context.Schools.Add(school);
                _context.SaveChanges();

                model.IsSuccess = true;
                model.Message = "School added successfully";
                
            }
            catch(Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            return model;
        }

        public ResponseModel UpdateSchool(Guid schoolId, UpdateSubjectModel updateModel)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var _temp = _context.Schools.Include(s => s.Holidays).FirstOrDefault(s => s.Id == schoolId);

                if (_temp == null)
                {
                    model.IsSuccess = false;
                    model.Message = "School not found";
                    return model;
                }

                _temp.Name = updateModel.Name;
                _temp.Holidays.Clear();

                foreach(Guid id in updateModel.Holidays)
                {
                    _temp.Holidays.Add(_context.Holidays.FirstOrDefault(h => h.Id == id));
                }

                _context.Update(_temp);
                _context.SaveChanges();
                model.IsSuccess = true;
                model.Message = "School updated successfully";
            }
            catch(Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            return model;
        }
    }
}
