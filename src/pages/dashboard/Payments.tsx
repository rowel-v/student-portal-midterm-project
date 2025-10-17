import {
  CreditCard,
  Receipt,
  Clock,
  CheckCircle,
  BookOpen,
  GraduationCap,
  ChevronDown,
  Check,
} from "lucide-react";
import { useState } from "react";

const Payments: React.FC = () => {
  const [selectedPaymentPlan, setSelectedPaymentPlan] =
    useState<string>("installment");
  const [showPaymentOptions, setShowPaymentOptions] = useState<boolean>(false);

  const paymentHistory = [
    {
      id: 1,
      description: "Tuition Fee - 1st Semester",
      amount: 63000.0,
      date: "2023-08-15",
      status: "paid",
      type: "tuition",
      semester: "1st Sem 2023-2024",
    },
    {
      id: 2,
      description: "Tuition Fee - 2nd Semester (1st Installment)",
      amount: 120500.0,
      date: "2024-01-15",
      status: "paid",
      type: "tuition",
      semester: "2nd Sem 2023-2024",
    },
    {
      id: 3,
      description: "Library Fee",
      amount: 20000.0,
      date: "2024-01-10",
      status: "paid",
      type: "library",
      semester: "2nd Sem 2023-2024",
    },
    {
      id: 4,
      description: "Computer Lab Fee",
      amount: 200000.0,
      date: "2024-01-08",
      status: "paid",
      type: "laboratory",
      semester: "2nd Sem 2023-2024",
    },
  ];

  const currentTuition = {
    semester: "2nd Semester 2023-2024",
    totalAmount: 250000.0,
    paidAmount: 12500.0,
    remainingBalance: 12500.0,
    dueDate: "2024-01-25",
    paymentPlans: [
      {
        id: "installment",
        name: "Installment Plan",
        description: "Pay in 2 equal installments",
        amount: 40000.0,
        discount: 0,
        dueDates: ["2024-01-25", "2024-03-15"],
        features: ["Flexible payment", "No extra charges"],
      },
      {
        id: "full",
        name: "Full Payment",
        description: "Pay full amount",
        amount: 25000.0,
        discount: 0,
        dueDate: "2024-01-25",
        features: ["One-time payment", "Standard rate"],
      },
      {
        id: "full_discount",
        name: "Full Payment with Early Bird Discount",
        description: "Pay full amount with 5% discount",
        amount: 23750.0,
        discount: 1250.0,
        dueDate: "2024-01-20",
        features: ["5% discount", "Save ₱1,250", "Early payment required"],
      },
    ],
  };

  const otherPayments = [
    {
      id: 1,
      description: "Graduation Fee",
      amount: 2000.0,
      dueDate: "2024-02-15",
      type: "graduation",
    },
    {
      id: 2,
      description: "Miscellaneous Fee",
      amount: 800.0,
      dueDate: "2024-01-18",
      type: "miscellaneous",
    },
  ];

  const paymentMethods = [
    {
      id: 1,
      name: "BDO Online Banking",
      type: "bank",
    },
    {
      id: 2,
      name: "GCash",
      type: "ewallet",
    },
    {
      id: 3,
      name: "Credit Card",
      type: "card",
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getPaymentIcon = (type: string) => {
    switch (type) {
      case "tuition":
        return <BookOpen className="w-5 h-5" />;
      case "graduation":
        return <GraduationCap className="w-5 h-5" />;
      case "library":
        return <BookOpen className="w-5 h-5" />;
      case "laboratory":
        return <CreditCard className="w-5 h-5" />;
      default:
        return <CreditCard className="w-5 h-5" />;
    }
  };

  const selectedPlan = currentTuition.paymentPlans.find(
    (plan) => plan.id === selectedPaymentPlan
  );

  return (
    <div className="bg-gradient-to-br from-slate-900/95 to-blue-900/95 p-6 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/20">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          💰 School Payments
        </h2>
        <p className="text-blue-200">Manage your tuition fees and payments</p>
      </div>

      {/* Current Tuition Overview */}
      <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">
              {currentTuition.semester}
            </h3>
            <p className="text-blue-200">Current Tuition Balance</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">
              {formatCurrency(currentTuition.remainingBalance)}
            </div>
            <div className="text-blue-200 text-sm">
              Due: {formatDate(currentTuition.dueDate)}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-white text-sm mb-2">
            <span>Payment Progress</span>
            <span>
              {(
                (currentTuition.paidAmount / currentTuition.totalAmount) *
                100
              ).toFixed(1)}
              %
            </span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-1000"
              style={{
                width: `${
                  (currentTuition.paidAmount / currentTuition.totalAmount) * 100
                }%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between text-white/60 text-xs mt-1">
            <span>Paid: {formatCurrency(currentTuition.paidAmount)}</span>
            <span>Total: {formatCurrency(currentTuition.totalAmount)}</span>
          </div>
        </div>

        {/* Payment Plan Selection */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-bold text-white">
              Select Payment Plan
            </h4>
            <button
              onClick={() => setShowPaymentOptions(!showPaymentOptions)}
              className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
            >
              {showPaymentOptions ? "Hide Options" : "Show Options"}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showPaymentOptions ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {showPaymentOptions && (
            <div className="grid gap-3 mb-4">
              {currentTuition.paymentPlans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPaymentPlan(plan.id)}
                  className={`p-4 border rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedPaymentPlan === plan.id
                      ? "border-blue-400 bg-blue-500/20"
                      : "border-white/20 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedPaymentPlan === plan.id
                            ? "border-blue-400 bg-blue-400"
                            : "border-white/40"
                        }`}
                      >
                        {selectedPaymentPlan === plan.id && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          {plan.name}
                        </div>
                        <div className="text-blue-200 text-sm">
                          {plan.description}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-lg">
                        {formatCurrency(plan.amount)}
                      </div>
                      {plan.discount > 0 && (
                        <div className="text-green-400 text-sm">
                          Save {formatCurrency(plan.discount)}
                        </div>
                      )}
                    </div>
                  </div>
                  {plan.features && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {plan.features.map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Selected Plan Action */}
          {selectedPlan && (
            <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-400/30 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">
                    Selected: {selectedPlan.name}
                  </div>
                  <div className="text-blue-200 text-sm">
                    Amount: {formatCurrency(selectedPlan.amount)}
                    {selectedPlan.discount > 0 && (
                      <span className="text-green-400 ml-2">
                        (Discount: {formatCurrency(selectedPlan.discount)})
                      </span>
                    )}
                  </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold transition-colors">
                  Pay Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Other Pending Payments */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Other Payments Due
          </h3>
          <div className="space-y-3">
            {otherPayments.map((payment) => (
              <div
                key={payment.id}
                className="bg-white/10 border border-white/20 p-4 rounded-xl hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getPaymentIcon(payment.type)}
                    <div>
                      <div className="text-white font-semibold">
                        {payment.description}
                      </div>
                      <div className="text-blue-200 text-sm">
                        Due: {formatDate(payment.dueDate)}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-lg">
                      {formatCurrency(payment.amount)}
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-lg transition-colors">
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Payment Methods
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="bg-white/10 border border-white/20 p-3 rounded-xl text-center hover:bg-white/15 transition-all duration-300"
                >
                  <CreditCard className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                  <div className="text-white text-sm">{method.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Payment History</h3>
          <div className="space-y-3">
            {paymentHistory.map((payment) => (
              <div
                key={payment.id}
                className="bg-white/10 border border-white/20 p-4 rounded-xl hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(payment.status)}
                    <div>
                      <div className="text-white font-semibold">
                        {payment.description}
                      </div>
                      <div className="text-blue-200 text-sm">
                        {payment.semester} • Paid on {formatDate(payment.date)}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold text-lg">
                      {formatCurrency(payment.amount)}
                    </div>
                    <button className="text-blue-300 hover:text-blue-200 text-sm flex items-center gap-1 transition-colors">
                      <Receipt className="w-3 h-3" />
                      Receipt
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex gap-3 mt-6">
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition-colors">
              Make Payment
            </button>
            <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/30 text-white py-3 rounded-xl font-semibold transition-colors">
              View Statement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
