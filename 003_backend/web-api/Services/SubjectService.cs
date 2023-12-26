using web_api.CRUDModels;
using web_api.Models;
using web_api.Models.DetailModels;
using web_api.Services.ServiceInterfaces;

namespace web_api.Services;

public class SubjectService : ISubjectService
{
    public SubjectDetails GetSubjectById(Guid subjectId)
    {
        throw new NotImplementedException();
    }

    public List<SubjectDetails> GetAllSubjects()
    {
        throw new NotImplementedException();
    }

    public List<SubjectDetails> GetAllActiveSubjects()
    {
        throw new NotImplementedException();
    }

    public ResponseModel CreateSubject(CreateAndUpdateSubjectModel createAndUpdateModel)
    {
        throw new NotImplementedException();
    }

    public ResponseModel UpdateSubject(Guid subjectId, CreateAndUpdateSubjectModel updateModel)
    {
        throw new NotImplementedException();
    }

    public ResponseModel DeleteSubject(Guid subjectId)
    {
        throw new NotImplementedException();
    }
}