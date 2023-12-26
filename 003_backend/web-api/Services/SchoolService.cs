using web_api.CRUDModels;
using web_api.Models;
using web_api.Services.ServiceInterfaces;

namespace web_api.Services;

public class SchoolService : ISchoolService
{
    public List<SchoolInformations> GetInformationsForAllSchools()
    {
        throw new NotImplementedException();
    }

    public SchoolInformations GetSchoolInformations(Guid schoolId)
    {
        throw new NotImplementedException();
    }

    public ResponseModel AddNewSchoolInformations(CreateAndUpdateSchoolModel createAndUpdateModel)
    {
        throw new NotImplementedException();
    }

    public ResponseModel UpdateSchoolInformations(Guid schoolId, CreateAndUpdateSchoolModel updateModel)
    {
        throw new NotImplementedException();
    }

    public ResponseModel DeleteSchoolInformations(Guid schoolId)
    {
        throw new NotImplementedException();
    }
}