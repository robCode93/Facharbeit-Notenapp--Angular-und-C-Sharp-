using web_api.Models;
using web_api.Services.ServiceInterfaces;

namespace web_api.Services
{
    public class SchoolService : ISchoolService
    {
        public ResponseModel DeleteSchool(Guid schoolId)
        {
            throw new NotImplementedException();
        }

        public List<School> GetAllSchools()
        {
            throw new NotImplementedException();
        }

        public Holiday GetHolidayById(Guid holidayId)
        {
            throw new NotImplementedException();
        }

        public List<Holiday> GetHolidaysOfSchool(Guid schoolId)
        {
            throw new NotImplementedException();
        }

        public School GetSchoolById(Guid schoolId)
        {
            throw new NotImplementedException();
        }

        public ResponseModel SaveSchool(School schoolModel)
        {
            throw new NotImplementedException();
        }
    }
}
