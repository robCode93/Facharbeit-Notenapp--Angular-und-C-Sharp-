using web_api.CRUDModels;
using web_api.Models;
using web_api.Models.DetailModels;
using web_api.Services.ServiceInterfaces;

namespace web_api.Services;

public class GradService : IGradService
{
    public List<GradDetails> GetAllGrads()
    {
        throw new NotImplementedException();
    }

    public GradDetails GetGradById(Guid gradId)
    {
        throw new NotImplementedException();
    }

    public ResponseModel CreateGrad(CreateAndUpdateGradModel createAndUpdateModel)
    {
        throw new NotImplementedException();
    }

    public ResponseModel UpdateGrad(Guid gradId, CreateAndUpdateGradModel updateModel)
    {
        throw new NotImplementedException();
    }

    public ResponseModel DeleteGrad(Guid gradId)
    {
        throw new NotImplementedException();
    }
}