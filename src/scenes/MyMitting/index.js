// import React, { PureComponent } from 'react';
// import SendToApprovalConfirmation from './containers/SendToApprovalConfirmation';
// import ProcessModal from './containers/ProcessModal';
// import EditVacationModal from './containers/EditVacationModal';
// import { MyVacationsWrapper, VacationDays, VacationDaysPanel } from './styles';

// export class MyVacations extends PureComponent<{}, MyVacations$State> {
//   state = {
//     organizationId: null,
//     sendingToApprovalVacationId: null,
//     processingVacationId: null,
//     editingVacationYear: null
//   };

//   handleOrganizationIdChange = (organizationId: string) => this.setState({ organizationId });

//   handleSendToApproval = (sendingToApprovalVacationId: string) => this.setState({ sendingToApprovalVacationId });
//   handleSendToApprovalClose = () => this.setState({ sendingToApprovalVacationId: null });

//   handleProcess = (processingVacationId: string) => this.setState({ processingVacationId });
//   handleProcessClose = () => this.setState({ processingVacationId: null });

//   handleEditVacation = (editingVacationYear: number) => this.setState({ editingVacationYear });
//   handleEditVacationClose = () => this.setState({ editingVacationYear: null });

//   render() {
//     const { organizationId, sendingToApprovalVacationId, processingVacationId, editingVacationYear } = this.state;
//     return (
//       <MyVacationsWrapper>
//         <OrganizationSelect value={organizationId} onChange={this.handleOrganizationIdChange} />
//         <VacationDaysPanel>
//           <VacationDays>Количество дней отпуска: 97</VacationDays>
//           <VacationDays>Запланировано: 28</VacationDays>
//           <VacationDays>Остаток за прошлый период: 14</VacationDays>
//         </VacationDaysPanel>
//         {organizationId ? (
//           <Query query={GetMyVacations} variables={{ organizationId }} fetchPolicy="cache-and-network">
//             {({ data }: { data?: MyVacationsQ }) =>
//               data && data.vacations ? (
//                 <VacationsList
//                   vacations={data.vacations}
//                   onSendToApproval={this.handleSendToApproval}
//                   onProcess={this.handleProcess}
//                   onEdit={this.handleEditVacation}
//                 />
//               ) : null
//             }
//           </Query>
//         ) : null}
//         {sendingToApprovalVacationId ? (
//           <SendToApprovalConfirmation
//             vacationId={sendingToApprovalVacationId}
//             onClose={this.handleSendToApprovalClose}
//           />
//         ) : null}
//         {processingVacationId ? (
//           <ProcessModal vacationId={processingVacationId} onClose={this.handleProcessClose} />
//         ) : null}
//         {editingVacationYear && organizationId ? (
//           <EditVacationModal
//             organizationId={organizationId}
//             year={editingVacationYear}
//             onClose={this.handleEditVacationClose}
//           />
//         ) : null}
//       </MyVacationsWrapper>
//     );
//   }
// }

// export default MyVacations;


import React, { PureComponent } from 'react';

class MyMitting extends PureComponent {
  render() {
    return (
      <h1>Mitting Page</h1>
    );
  }
}

export default MyMitting;
