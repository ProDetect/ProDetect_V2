export interface Column {
   uid: string;
   [key: string]: string; // To allow for the additional named properties
}

export const columns: Column[] = [
   { time_date: 'TIME & DATE', uid: 'time_date' },
   { alertId: 'ALERT ID', uid: 'alertId' },
   { customerId: 'CUSTOMER ID', uid: 'customerId' },
   { transactionId: 'TRANSACTION ID', uid: 'transactionId' },
   { transactionType: 'TRANSACTION TYPE', uid: 'transactionType' },
   { amount: 'AMOUNT', uid: 'amount' },
   { riskScore: 'RISK SCORE', uid: 'riskScore' },
   { alertStatus: 'ALERT STATUS', uid: 'alertStatus' },
];

export interface AlertUser {
   time: string;
   date: string;
   alertId: string;
   customerId: string;
   transactionId: string;
   transactionType: string;
   amount: string;
   riskScore: string;
   alertStatus: string;
}

export const users: AlertUser[] = [

   // Placeholder Data
   {
      time: '11:29',
      date: '2nd June, 2024',
      alertId: 'AL0212',
      customerId: 'CR0000909',
      transactionId: 'TR00056212',
      transactionType: 'Debit',
      amount: '$2,900',
      riskScore: '60',
      alertStatus: 'flagged',
   },
   {
      time: '1:20',
      date: '12th June, 2024',
      alertId: 'AL0212',
      customerId: 'CR00067870909',
      transactionId: 'TR98700056212',
      transactionType: 'Debit',
      amount: '$5,900',
      riskScore: '50',
      alertStatus: 'flagged',
   },
   {
      time: '10:59',
      date: '22nd June, 2025',
      alertId: 'AL020912',
      customerId: 'CR00078900909',
      transactionId: 'TR03450056212',
      transactionType: 'Credit',
      amount: '$22,00',
      riskScore: '69',
      alertStatus: 'flagged',
   },
];

