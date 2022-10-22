using web_api.Models;
using web_api.Models.DetailModels;

namespace web_api.Services.ServiceInterfaces
{
    public interface ISubjectService
    {
        ResponseModel SaveSubject(Subject subjectModel);
        ResponseModel DeleteSubject(Guid subjectId);
        Subject GetSubjectById(Guid subjectId);
        List<Subject> GetAllSubjects();
        List<GradDetails> GetGradsOfSubject(Guid subjectId);
        ResponseModel AddGradToSubject(Guid subjectId, Grad gradModel);
    }
}
